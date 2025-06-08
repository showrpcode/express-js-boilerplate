function jsonResponse(success = false, message = '', data = {}, error = {}) {
    return {
        success: success,
        message: message,
        data: data,
        error: error
    }
}

module.exports = jsonResponse;