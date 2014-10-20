<?php
?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Meeting Cost Calculator</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <meta name="author" content="">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png">
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png">
                        <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png">
                                       <link rel="shortcut icon" href="images/favicon.png">

        <link rel="stylesheet" href="styles/main.css">
        <script src="scripts/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div class="navbar navbar-inverse navbar-fixed-top">
          <div class="navbar-inner">
            <div class="container">
              <!--button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button><!--/.btn-navbar -->
              <a class="brand" href="#">Meeting Cost Calculator </a>
              <!--div class="nav-collapse collapse">
                <ul class="nav">
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </div>
        </div>

        <div class="container">

          <h1>Bootstrap starter template</h1>
          <p>Use this document as a way to quick start any new project.<br> All you get is this message and a barebones HTML document.</p>
          <form action="#" class="form-horizontal" id="calculator">
            <fieldset>
                <legend>How much does your meeting cost?</legend>

                <div class="control-group">
                    <label for="attending" class="control-label">People attending</label>
                    <div class="controls">
                        <div class="input-prepend">
                            <span class="add-on"><i class="icon icon-user"></i></span>
                            <input name="attending" type="number" step="1" class="control input-small" title="How many people are in the room?" data-default="1" placeholder="# people" maxlength="3" required pattern="/[0-9]{1,3}/" autofocus />
                        </div>
                    </div>
                </div>

                <div class="control-group">
                    <label for="rate" class="control-label">Average hourly rate</label>
                    <div class="controls">
                        <div class="input-prepend input-append">
                            <span class="add-on currency"><i class="icon">$</i></span>
                            <input name="rate" type="number" class="control input-mini" title="How much is a person's time worth?" data-default="180" placeholder="$/ hr" maxlength="4" required pattern="/[0-9]{1,4}/" />
                            <span class="add-on">.00</span>
                        </div>
                    </div>
                </div>

                <div class="control-group">
                    <label for="rate" class="control-label">Pad with</label>
                    <div class="controls">
                        <div class="input-prepend">
                            <span class="add-on"><i class="icon icon-time"></i></span>
                            <input name="pad" type="number" class="control input-small" title="Has the meeting already started?" data-default="0" placeholder="minutes" maxlength="2" required pattern="/[0-9]{1,2}/" />
                            <span class="help-inline">minutes</span>
                        </div>
                    </div>
                </div>
                <div class="controls-row">
                    <button type="submit" id="start" class="btn btn-large btn-primary btn-success">Start Meeting</button>
                    <button type="button" id="reset" class="btn btn-large">Reset</button>
                </div>
            </fieldset>
          </form>

          <div id="overlay">
              <div id="cost">
                  <h1 class="heading">$<span id="accrued" class="ticker" data-default="0"></span></h1>
                  <h2 class="heading"><span id="elapsed" class="ticker" data-default="00:00:00"></span></h2>
                  <button type="button" id="stop" class="btn btn-large btn-primary btn-danger">Stop Already!</button>
              </div>
          </div>

        </div> <!-- /container -->

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="scripts/vendor/jquery-1.10.1.min.js"><\/script>')</script>
        <script src="scripts/main.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID.
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    -->
    </body>
</html>
