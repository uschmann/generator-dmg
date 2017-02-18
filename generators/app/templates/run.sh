#! /bin/sh
./make.sh
wine ./bin/bgb/bgb.exe build/<%= name %>.gb
