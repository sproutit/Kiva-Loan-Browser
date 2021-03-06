// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */


// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Klb.main = function main() {

	// Step 1: Initialize the data store
	// -live data source
	//	Klb.store.from(Klb.KivaDataSource.create())
	// -fixtutes
  Klb.store.from(SC.Record.fixtures)

  // Step 2: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Klb.getPath('mainPage.appPane').append();

  // Step 1. Set the content property on your primary controller.
  // This will make your app come alive!
	var loans = Klb.store.findAll(Klb.Loan);
	Klb.loansController.set('content', loans);

	Klb.makeFirstResponder(Klb.START);
} ;

function main() { Klb.main(); }
