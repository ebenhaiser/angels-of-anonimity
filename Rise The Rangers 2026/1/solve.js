const fs = require('fs');
const crypto = require('crypto');
const path = require('path'); // 1. Tambahkan modul path

const PREFIX = 'f2072d1191d';
const SUFFIX = 'ba7dabc78e1';

// 2. Buat path dinamis searah dengan lokasi file solve.js
const FILE_PATH = path.join(__dirname, 'imigration_list.txt');

function findTarget() {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        const lines = data.split(/\r?\n/);

        console.log('Memulai proses pencocokan hash MD5...\n');

        for (const line of lines) {
            const name = line.trim();
            if (!name) continue;

            const hash = crypto.createHash('md5').update(name).digest('hex');

            if (hash.startsWith(PREFIX) && hash.endsWith(SUFFIX)) {
                console.log('========================================');
                console.log('       TARGET DITEMUKAN!');
                console.log('========================================');
                console.log(`Alias Tersangka : ${name}`);
                console.log(`Full MD5 Hash   : ${hash}`);
                console.log('----------------------------------------');
                console.log(`FLAG (Underscore): FLAG{${name.replace(/\s+/g, '_')}}`);
                console.log(`FLAG (Space)     : FLAG{${name}}`);
                console.log('========================================');
                return;
            }
        }

        console.log('Tidak ada hash yang cocok dalam daftar.');
    } catch (error) {
        console.error('Error membaca file:', error.message);
    }
}

findTarget();