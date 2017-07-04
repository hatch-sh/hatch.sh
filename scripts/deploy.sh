#!/bin/bash

set -euo pipefail

hatch website deploy --config-file=. ./public
