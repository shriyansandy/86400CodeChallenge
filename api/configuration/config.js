const data = require("../data/apiTestData");
const request = require("supertest")(data.petstore_api_url);
const expect = require("chai").expect;

module.exports = {
    request,
    expect,
};