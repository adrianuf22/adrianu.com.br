#!/bin/bash

find ./www -type f -exec curl -u $FTP_USER:$FTP_PASSWORD --ftp-create-dirs -T {} ftp://$FTP_HOST$FTP_HOME/{} \;
