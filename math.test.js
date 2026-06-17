const { tambah } = require('./math.js');

test('Menguji fungsi tambah: 2 + 3 harus sama dengan 5', () => {
    // Sengaja digagalkan: 2 + 3 diekspektasikan menjadi 99 (pasti salah)
    expect(tambah(2, 3)).toBe(99); 
});