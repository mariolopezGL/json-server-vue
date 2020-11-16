import axios from 'axios';

// Add some defaults to our local axios instance.
// Should also be able to do api error logging here.
const instance = axios.create({
});

// This is where we need to log to /api/resource/sitelog/log/ and s_sm.trackLinkWrapper
// See apiservices/lib/apiServices.js and asyncha/public/src/js/lib/errorReporter.js
function errorReporter(error) {
  // console.log(error);
  return Promise.reject(error);
}

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  errorReporter
);

instance.interceptors.response.use(
  (r) => {
    return r;
  },
  errorReporter
);

export default instance;
