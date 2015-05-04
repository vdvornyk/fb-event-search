function FbUtils(){}
FbUtils.getFBUserDetails = function(fbId, userToPopulate){
    FB.api('/' + fbId + '/picture?widht=219&height=219', function (response) {
        userToPopulate.avatarUrl(response.data.url);
    });
    FB.api('/' + fbId, function (response) {
        console.log( response);
        userToPopulate.name(response.first_name);
        userToPopulate.surname(response.last_name);
    });
}

FbUtils.showRequestDialog = function(friends_id){
    FB.ui({
            method: 'apprequests',
            message: 'Come play BattleWord with me!',
            to: friends_id
        },
        function(){
            console.log("some result?")
        }
    );
};
String.prototype.trunc = String.prototype.trunc || function(n){ return this.length>n ? this.substr(0,n-1)+'&hellip;' : this; };

FbUtils.getEventsByCity = function (viewModel) {
    var searchCityName=viewModel.citySearch();
    console.log("SEARCH CITY NAME="+searchCityName);
    var query = 'select eid,name,venue, attending_count, start_time, all_members_count, pic_big, start_time  from event WHERE (contains("'+searchCityName+'")) and start_time > now() order by start_time ASC';
    FB.api(
        "/v2.0/fql?q=" + query,
        function (data) {
            initialize(data.data);
            var eventList = $.map(data.data, function (item) {

                item.start_time = new Date(item.start_time).toLocaleDateString();
                console.log(item);
                if(item.name!=undefined) {
                      console.log(item.name);
                      item.name = item.name.substring(0, 25);
                  }
                return item
            });

            viewModel.events(eventList);
        }
    );
}