var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function(){
	describe("The contact service", function(){
		beforeEach(function(){
			module('AddressBook');
			inject(function($injector){
				contactService = $injector.get("contactService");
				$httpBackend = $injector.get("$httpBackend");
			});
		});
		it("Should have property contacts, an array", function(){
			expect(contactService.contacts).to.be.an('array');
		});
		it("Should call the backend", function(){
			$httpBackend.expectGET("http://localhost:9001/contacts")
				.respond(200, []);
			$httpBackend.flush();
		});
	})
})