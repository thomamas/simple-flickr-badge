/* "simple-flickr-badge.js" by Thomas Insel <tinsel@tinsel.org>
 *
 *     https://github.com/thomamas/simple-flickr-badge
 *
 * Usage:
 *
 *     <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
 *     <script src="/js/flickr-badge.js" data-api-key='...' data-photoset-id='...' data-user-id='...' data-size='_m' data-count='3'></script>
 *
 */
 
/* Copyright 2017 Thomas Insel
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied.  See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* This product uses the Flickr API but is not endorsed or certified
 * by Flickr. 
 */

(function () {

    // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    Array.prototype.shuffle = function () {
        for (var i = this.length; i > 0; --i)
            this.push(this.splice(Math.random() * i | 0, 1)[0]);
        return this;
    };

    var this_script = $("script").last();
    var key = this_script.attr("data-api-key");
    var set = this_script.attr("data-photoset-id");
    var user = this_script.attr("data-user-id");
    var size = this_script.attr("data-size");
    var count = this_script.attr("data-count");

    if (!size) { size = "_m"; }

    if (!count) { count = 3; }

    if (!key || !set || !user) {
        console.log("missing parameters")
        return 1;
    }

    var opts = {
        method: "flickr.photosets.getPhotos",
        api_key: key,
        photoset_id: set,
        user_id: user,
        format: "json",
        nojsoncallback: 1,
        media: "photos"
    };

    var rid = Math.round(10000 * Math.random()); 
      // each script call has a different id so you can have multiple instance on a page
    document.write("<div id=" + rid + " class=flickrpix></div>");
    var mydiv = $("#" + rid);
    mydiv.append("<span class=spacer></span>");

    $.get("https://api.flickr.com/services/rest/", opts, function(resp){

        if (resp.stat === "ok") {

            var owner = resp.photoset.owner;
            var pics = resp.photoset.photo.shuffle().slice(0, count);

            $.each(pics, function(index, value){

                var img = $( '<img>', {
                    src: "https://farm" + value.farm + ".staticflickr.com/" + value.server + "/" + value.id + "_" + value.secret + size + ".jpg",
                    alt: value.title
                } );

                var a = $( '<a>', {
                    href: "https://www.flickr.com/photos/" + owner + "/" + value.id,
                    title: value.title
                } );

                mydiv.append(a.append(img));

            });

        } else {

            console.log("not ok", resp);

        }

    });
    
} )()

