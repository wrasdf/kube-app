#!/usr/bin/env bash
set -eo pipefail

DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$DIR" ]]; then DIR="$PWD"; fi
. "$DIR/bash-spec.sh"

status=$(curl -Is localhost:8080 | head -1 | tr -d '[:space:]')

describe "E2E test for http-echo server" "$(

  it "return 200 status code" "$(
    [[ "${status}" = "HTTP/1.1200OK" ]]
    should_succeed
  )"

)"
