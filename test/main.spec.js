var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function(){
	describe("The contact service", function(){
		it("Should have property contacts, an array", function(){
			module('AddressBook');
			inject(function($injector){
				contactService = $injector.get("contactService");
			});

			expect(contactService.contacts).to.be.an('array');
			//chai.assert.isArray([]);
		})
	})
})