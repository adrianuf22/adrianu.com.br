<?php

	require_once __DIR__ . '/config.php';

	$app = new Silex\Application();

	// #Routes
	require_once __DIR__ . '/routes.php';

	// #Debug
	$app['debug'] = true;

	$app->run();