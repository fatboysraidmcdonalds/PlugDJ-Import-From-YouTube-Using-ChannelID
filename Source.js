if(typeof window.fatboysraidmcdonalds_CHANNELIDHACK === "undefined"){
  window.fatboysraidmcdonalds_CHANNELIDHACK = true;

  /*https://www.reddit.com/r/plugdj/comments/3ixh34/yet_another_youtube_import_hack_for_those_with/*/
  window.gapi.client.youtube.channels.yoba = window.gapi.client.youtube.channels.list;
    window.gapi.client.youtube.channels.list = function(params){ 
    params["id"] = params["forUsername"];
    params["forUsername"] = null;
    return window.gapi.client.youtube.channels.yoba(params);
  }

  $('#youtube-input-field').attr("placeholder","Youtube ChannelId");
}
