module.exports =  (callback) => {
    require('crypto').randomBytes(48, function(err, buffer) {
        callback(buffer.toString('hex'));
    });
}