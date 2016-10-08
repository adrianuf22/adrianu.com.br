<?php

define('DS', DIRECTORY_SEPARATOR);
define('CONFIGDIR', __DIR__ . DS);
define('ROOTDIR', CONFIGDIR . '..' . DS);

require ROOTDIR . '..' . DS . 'vendor' . DS . 'autoload.php';
$_config = require CONFIGDIR . 'app.php';