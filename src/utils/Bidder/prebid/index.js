/* eslint-disable no-console */
import Bidder from '../';

const bidder = new Bidder('prebid');

/**
 * Initializes the bidder.
 * @returns {Promise}
 */
bidder.init = () => {
  if (bidder.isReady) return;
  var pbjs = window.pbjs || {};
  pbjs.que = pbjs.que || [];

  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = `https://acdn.adnxs.com/prebid/not-for-prod/1/prebid.js?${Math.random(1, 10)}`;
    el.async = true;
    el.onload = resolve;
    el.onerror = reject;
    document.head.appendChild(el);
  });
};

bidder.onBidWon = () => { };

bidder.onTimeout = () => { };

bidder.onVideoBidTimeout = () => { };

/**
 * Will fetch the prebid display bids.
 * @param {Number} timeout 
 * @param {Number} failSafeTimeout 
 * @param {Object} adUnits 
 * @returns {Promise}
 */
bidder.fetchDisplayBids = adUnits => new Promise(resolve => {
  var pbjs = window.pbjs || {};
  pbjs.que.push(function () {
    // Set new adUnits
    const adUnitCodes = adUnits.map(x => x.code);
    pbjs.addAdUnits(adUnits);

    // Make the request
    pbjs.requestBids({
      adUnitCodes,
      timeout: bidder.timeout,
      bidsBackHandler: response => {
        resolve({
          response,
          bids: pbjs.getBidResponses(),
          adUnitCodes,
        });
        // remove the adUnits
        adUnitCodes.forEach(adUnitCode => window.pbjs.removeAdUnit(adUnitCode));
      },
    });
  });
});

/**
 * 
 * @function
 * @param {Object} response.adUnitCodes
 * @returns {void}
 */
bidder.handleResponse = ({ adUnitCodes }) => {
  var pbjs = window.pbjs || {};
  var googletag = window.googletag || {};
  googletag.cmd.push(function () {
    pbjs.que.push(function () {
      pbjs.setTargetingForGPTAsync(adUnitCodes);
    });
  });
};

/**
 * Will fetch the video bids and return an adTagURL.
 * @param {Object} adUnit 
 * @param {Object} - VideoJS params
 * @returns {Promise}
 */
bidder.fetchVideoBids = (adUnit, params) => new Promise(resolve => {
  const pbjs = window.pbjs || {};
  pbjs.que = pbjs.que || [];
  pbjs.que.push(() => {

    // remove adUnit
    window.pbjs.removeAdUnit(adUnit.code);
    // add adUnit
    pbjs.addAdUnits(adUnit);
    pbjs.requestBids({
      timeout: bidder.timeout,
      bidsBackHandler: () => {
        resolve({
          adTagUrl: pbjs.adServers.dfp.buildVideoUrl({ adUnit, params })
        });
      }
    });
  });
});

/**
 * @param {Object} param.adTagUrl - AdTag url returned from fetchVideoBids.
 * @param {Function} callback - Callback function, this should probably be the 
 * function used to initialize the videoPlayer with the adTagUrl
 * @param {void}
 */
bidder.handleVideoResponse = ({ adTagUrl } = {}, callback) => {
  console.log('tagUrl', adTagUrl);
  callback(adTagUrl);
};


export default bidder;