const { request, expect } = require("../configuration/config");
const data = require("../data/apiTestData");

describe("Petstore test Suite.", () => {
    it("/POST - Add new pet to the store.", async () => {
        const postResponse = await request
            .post('/pet')
            .set('Authorization', `api_key=` + data.api_key)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(
                {
                    "id": data.pet_id,
                    "category": {
                      "id": data.pet_id,
                      "name": data.pet_name
                    },
                    "name": data.pet_name,
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": data.pet_id,
                        "name": data.pet_name
                      }
                    ],
                    "status": data.pet_available
                }
            );
        await expect(postResponse.status).to.eql(200);
        await expect(postResponse.body.id).to.eql(data.pet_id);
        await expect(postResponse.body.name).to.eql(data.pet_name);
        await expect(postResponse.body.status).to.eql(data.pet_available);
    })

    it("/GET - Find pet by ID After Post Call.", async () =>
    {
        await setTimeout(function() {
            // waiting for the data to be present for the get response
        }, data.wait_in_milliseconds);
        const getResponse = await request
            .get('/pet/' + data.pet_id)
            .set('Accept', 'application/json')
            .set('Authorization', `api_key=` + data.api_key);
        await expect(getResponse.status).to.eq(200);
        await expect(getResponse.body.id).to.eql(data.pet_id);
        await expect(getResponse.body.name).to.eql(data.pet_name);
        await expect(getResponse.body.status).to.eql(data.pet_available);
    })

    it("/Put - Add new pet to the store.", async () => {
        const postResponse = await request
            .put('/pet')
            .set('Authorization', `api_key=` + data.api_key)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(
                {
                    "id": data.pet_id,
                    "category": {
                      "id": data.pet_id,
                      "name": data.updated_pet_name
                    },
                    "name": data.updated_pet_name,
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": data.pet_id,
                        "name": data.updated_pet_name
                      }
                    ],
                    "status": data.pet_not_available
                }
            ); 
        await expect(postResponse.status).to.eql(200);
        await expect(postResponse.body.id).to.eql(data.pet_id);
        await expect(postResponse.body.name).to.eql(data.updated_pet_name);
        await expect(postResponse.body.status).to.eql(data.pet_not_available);
    })

    it("/DELETE - Deletes a pet.", async () =>
    {
        const deleteResponse = await request
            .del('/pet/' + data.pet_id)
            .set('Accept', 'application/json')
            .set('Authorization', `api_key=` + data.api_key);
        await expect(deleteResponse.status).to.eq(200);
        await expect(deleteResponse.body.code).to.eq(200);
        await expect(deleteResponse.body.type).to.eq(data.pet_body_type);
        await expect(deleteResponse.body.message).to.eq(data.pet_id.toString());
    })
})