var request = require("request")

describe('calc', () => {
    it("should multiply 2 and 2", () => {
        expect(2*2).toBe(4)
    })
})

describe("get messages", () => {
    it("should return 200 OK", (done) => {
        request.get("http://localhost:3000/messages", (err, resp) => {
            expect(resp.statusCode).toBe(200)
            done()
        })
    })

    it("should return list , thats not empty", (done) => {
        request.get("http://localhost:3000/messages", (err, resp) => {
            expect(JSON.parse(resp.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe("get messages from user", () => {
    it("should return 200 OK", (done) => {
        request.get("http://localhost:3000/messages/tim", (err, resp) => {
            expect(resp.statusCode).toEqual(200)
            done()
        })
    })

    it("name should be tim", (done) => {
        request.get("http://localhost:3000/messages/tim", (err, resp) => {
            expect(JSON.parse(resp.body)[0].name).toEqual("tim")
            done()
        })
    })
})