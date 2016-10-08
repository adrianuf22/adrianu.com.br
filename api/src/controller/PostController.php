<?php

namespace Adrianu\Controller;

class PostController {
				
				public function listAll () {
								$list = scandir($this->_config['repository']);
								
								var_dump($list);
				}
				
}
