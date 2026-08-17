#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-3000}"
LOG_FILE="${LOG_FILE:-next-dev.log}"
PID_FILE="${PID_FILE:-next-dev.pid}"

if command -v ss >/dev/null 2>&1 && ss -ltn "sport = :$PORT" | grep -q LISTEN; then
  echo "Port $PORT is already in use. Open http://127.0.0.1:$PORT or choose another port: PORT=3010 ./start-local.sh"
  exit 1
fi

nohup npm run dev -- -p "$PORT" >"$LOG_FILE" 2>&1 &
PID=$!
echo "$PID" >"$PID_FILE"

sleep 3
if kill -0 "$PID" 2>/dev/null; then
  echo "Meridian is running."
  echo "PID: $PID"
  echo "URL: http://127.0.0.1:$PORT"
  echo "Log: $LOG_FILE"
  echo "Stop: ./stop-local.sh"
else
  echo "The server stopped during startup. Log output:"
  cat "$LOG_FILE"
  exit 1
fi
