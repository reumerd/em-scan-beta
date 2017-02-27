/**
 * AnswersController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	apikey: function (req,res) {
		if ( !req.param('apikey') ) {
			res.badRequest('Sorry, no apikey specified');
		}
		if ( req.param('apikey') != '1234567890' ) {
			res.badRequest('Sorry, wrong apikey specified');	
		}
	}
};

