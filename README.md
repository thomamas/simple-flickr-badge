# simple-flickr-badge

Flickr badges were a simple way to include a selection of Flickr pictures on your
web page.  I used something like

    <script src="http://www.flickr.com/badge_code_v2.gne?count=3&amp;display=random&amp;size=m&amp;layout=y&amp;source=user_set&amp;set=72123451235612345"></script>

to insert three random 240x240 pictures from one of my photosets (a.k.a. albums). You could use
appropriate parameters to change the size, selection, count, etc.

However, Flickr warns that this interface is deprecated.

This script is intended as a simple replacement that has only the features
I needed for my web site.  It uses [Flickr's API](https://www.flickr.com/api)
and [jQuery](http://jquery.com).

See http://www.tinsel.org/simple-flickr-badge/ for a live example.

## How to use

First, [request a Flickr API key](https://www.flickr.com/services/apps/create/apply/).

Any jQuery version is probably fine.  If you aren't already loading one, put
something like this in the head of your HTML document:

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

In the body:

    <script src="/js/simple-flickr-badge.js" data-api-key='...' 
        data-photoset-id='...' data-user-id='...' data-size='_m' 
        data-count='3'></script>

will display three 240x240 pictures from an appropriate photoset under the
listed userid.  An API Key is also required, and the size and count parameters 
are optional.  See https://www.flickr.com/services/api/misc.urls.html for
info on picture sizes.

CSS (adjust if you change the picture size or count):

    div.flickrpix {
      width:800px;
      height:260px;
      margin-left:auto;
      margin-right:auto;
      vertical-align:middle;
    }

    div.flickrpix a img {
      padding: 10px;
      vertical-align:middle;
    }

    span.spacer {
      display:inline-block;
      height:100%;
      vertical-align:middle;
    }

## Notes

This will actually only use the first 500 pictures in a set.

This product uses the Flickr API but is not endorsed or certified by Flickr. 

## Author

[Thomas Insel](http://tinsel.org/) <tinsel@tinsel.org>

## License

Copyright 2017 Thomas Insel

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You
may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
