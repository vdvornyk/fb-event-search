function UIUser(id){
    this.avatarUrl = ko.observable();
    this.name = ko.observable("");
    this.surname = ko.observable("");
    this.points = ko.observable(0);
    this.id = id;
    this.copyFrom = function(uiUser){
        this.avatarUrl(uiUser.avatarUrl());
        this.name(uiUser.name());
        this.surname(uiUser.surname());
        this.points(uiUser.points());
        this.id = uiUser.id;
    };
    this.getFullName = function(){
        return this.name() + " " + this.surname();
    }
}

function Event(){
    this.eid;
    this.attending_count;
    this.description;
    this.host;
    this.location;
    this.vanue_city;
    this.vanue_county;
    this.name;
    this.start_time;
    this.pic_big;
}