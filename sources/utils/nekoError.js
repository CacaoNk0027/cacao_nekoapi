'use strict';

/**.
 * @extends Error
 */
class nekoAPIError extends Error {
  constructor(className, error, response) {
    super();
    const flattened = this.constructor.flattenErrors(error.errors ?? error).join('');
    this.name = `Nekoapi_Error [${className}]`;
    this.message = error.message && flattened ? `${error.message}\n${flattened}` : error.message ?? flattened;

    /**
     * @type {string}
     */
     this.method = response.request.method

    /**
     * @type {string}
     */
    this.path = response.request.path

    /**
     * @type {number}
     */
    this.statusCode = parseInt(response.data.statusCode)

    /**
     * @type {HTTPErrorData}
     */
    this.responseData = {
      statusCode: response.data.statusCode,
      data: response.data.description,
      url: response.data.link_inicial
    };
  }

  static flattenErrors(obj, key = '') {
    let messages = [];

    for (const [k, v] of Object.entries(obj)) {
      if (k === 'message') continue;
      const newKey = key ? (isNaN(k) ? `${key}.${k}` : `${key}[${k}]`) : k;

      if (v._errors) {
        messages.push(`${newKey}: ${v._errors.map(e => e.message).join(' ')}`);
      } else if (v.code ?? v.message) {
        messages.push(`${v.code ? `${v.code}: ` : ''}${v.message}`.trim());
      } else if (typeof v === 'string') {
        messages.push(v);
      } else {
        messages = messages.concat(this.flattenErrors(v, newKey));
      }
    }

    return messages;
  }
}

class nekoError extends Error {
  /**
   * @param {string} className Nombre de la clase
   * @param {string} error Error en la función
   * @private
   */
  constructor(className, error) {
      super()

      this.name = `Nekoapi_Error [${className}]`;
      /**
      * Error recibido por el punto final
      * @type {string} 
      */
      this.message = error;
  }
}

module.exports = { nekoAPIError, nekoError };