# Audio (EN + PT, voice: female)
Coloque aqui os arquivos finais de áudio:
- brainreader-phase1-en.mp3
- brainreader-phase1-pt.mp3

Sugestão de normalização (ffmpeg):
ffmpeg -i input.wav -filter:a loudnorm -ar 48000 -ac 2 -b:a 192k output.mp3
