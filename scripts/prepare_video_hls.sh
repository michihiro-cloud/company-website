#!/usr/bin/env bash
# Prepare HLS renditions for DR_CLONE_anime_Treatment_202606.mp4
# Requires: ffmpeg

INPUT=assets/DR_CLONE_anime_Treatment_202606.mp4
OUT_DIR=public/videos/dr_clone_hls
mkdir -p "$OUT_DIR"

# Renditions: 1080, 720, 480
ffmpeg -y -i "$INPUT" -map 0 -c:v libx264 -b:v:0 5000k -s:v:0 1920x1080 -profile:v:0 main -c:a aac -b:a 128k -preset veryfast -g 48 -sc_threshold 0 -f hls -hls_time 6 -hls_playlist_type vod -hls_segment_filename "$OUT_DIR/1080p_%03d.ts" "$OUT_DIR/1080p.m3u8"

ffmpeg -y -i "$INPUT" -map 0 -c:v libx264 -b:v:0 2500k -s:v:0 1280x720 -profile:v:0 main -c:a aac -b:a 96k -preset veryfast -g 48 -sc_threshold 0 -f hls -hls_time 6 -hls_playlist_type vod -hls_segment_filename "$OUT_DIR/720p_%03d.ts" "$OUT_DIR/720p.m3u8"

ffmpeg -y -i "$INPUT" -map 0 -c:v libx264 -b:v:0 1200k -s:v:0 854x480 -profile:v:0 main -c:a aac -b:a 64k -preset veryfast -g 48 -sc_threshold 0 -f hls -hls_time 6 -hls_playlist_type vod -hls_segment_filename "$OUT_DIR/480p_%03d.ts" "$OUT_DIR/480p.m3u8"

# Create master playlist
cat > "$OUT_DIR/master.m3u8" <<EOF
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=6000000,RESOLUTION=1920x1080
1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=854x480
480p.m3u8
EOF

echo "HLS packages created in $OUT_DIR"
