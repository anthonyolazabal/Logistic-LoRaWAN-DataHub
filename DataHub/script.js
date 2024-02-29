function transform(publish, context) {
    const newPayload = {
        topic: publish.topic,
        payload: publish.payload.object,
        userProperties: [{ name: "transformed", value: "true" }]
    }
    return newPayload;
}