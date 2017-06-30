#!/bin/bash

set -euo pipefail

hatch website deploy hatch.yml ./public
