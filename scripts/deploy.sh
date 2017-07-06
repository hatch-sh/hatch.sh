#!/bin/bash

set -euo pipefail

hatch website deploy --config=website.yml ./public
