#!/usr/bin/env bash
set -euo pipefail
PID_FILE="${PID_FILE:-next-dev.pid}"
if [[ ! -f "$PID_FILE" ]]; then
  echo "No $PID_FILE file was found."
  exit 0
fi
PID="$(cat "$PID_FILE")"
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  echo "Stopped Meridian server (PID $PID)."
else
  echo "Process $PID is not running."
fi
rm -f "$PID_FILE"
