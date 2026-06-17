const { tambah } = require('./math.js');

test('Menguji fungsi tambah: 2 + 3 harus sama dengan 5', () => {
    expect(tambah(2, 3)).toBe(5);
});