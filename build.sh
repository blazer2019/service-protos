#!/bin/bash
protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=dist \
 --ts_proto_opt=outputServices=nice-grpc \
 --ts_proto_opt=outputServices=generic-definitions \
 --ts_proto_opt=esModuleInterop=true \
 -I=proto/ proto/**/*.proto