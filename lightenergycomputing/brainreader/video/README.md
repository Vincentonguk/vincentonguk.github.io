# Video (1080p)
Arquivo alvo: brainreader-phase1-1080p.mp4

Export template (ffmpeg):
ffmpeg -i video_edit_master.mov -c:v libx264 -pix_fmt yuv420p -profile:v high -crf 18 -preset slow -c:a aac -b:a 192k -movflags +faststart brainreader-phase1-1080p.mp4
