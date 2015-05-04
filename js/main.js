var viewModel = {
    currentUser: new UIUser(),
    events: ko.observableArray(),
    citySearch: ko.observable(),

    onAuth: function (response) {
        var that = this;
        //this.performAuth(response);
        this.getFBUserDetails("me", this.currentUser);
    },
    getFBUserDetails: function (fbId, userToPopulate) {
        FbUtils.getFBUserDetails(fbId, userToPopulate);
    },
    getSocialEvents: function(){
        FbUtils.getEventsByCity(this);
    },
    showMap: function(){
        $("#googleMap").modal('show');
    }


}

ko.applyBindings(viewModel, $('html')[0]);