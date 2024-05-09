/**
* makecode I2C OLED 128x64 扩展.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=20 color=#0855AA icon="O" block="希宝的液晶屏"
namespace LCM12864_SPI {
    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;

    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _a0_pin = DigitalPin.P14;
    let _ce_pin = DigitalPin.P2;

    // write a byte to lcm
    function LCD_WRITE (dat: number) {
        pins.digitalWritePin(_ce_pin, 0);
        let tmp = pins.spiWrite(dat);
        pins.digitalWritePin(_ce_pin, 1);
    }

    function cmd1(d: number) {
        pins.digitalWritePin(_a0_pin, 0)
        LCD_WRITE(d);
    }

    function dat1(d: number) {
        pins.digitalWritePin(_a0_pin, 1)
        LCD_WRITE(d);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = (col % 128);
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }
    
    /**
     * 在 OLED 上显示一个像素
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param color is dot color, eg: 1
     */
    //% blockId="LCM12864_SPI_PIXEL" block="显示像素 x %x|y %y|颜色 %color"
    //% weight=70 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function pixel(x: number, y: number, color: number = 1) {
        let page = y >> 3
        let shift_page = y % 8
        let ind = x + page * 128 + 1
        let b = (color) ? (_screen[ind] | (1 << shift_page)) : clrbit(_screen[ind], shift_page)
        _screen[ind] = b
        set_pos(x, page)
        dat1(b);
    }

    /**
     * 显示一个字符串
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% blockId="LCM12864_SPI_SHOWSTRING" block="显示文字 x %x|y %y|文字 %s|颜色 %color"
    //% weight=80 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function showString(x: number, y: number, s: string, color: number = 1) {
        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = font[s.charCodeAt(n)]
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j + 1))
                }
                ind = (x + n) * 5 + y * 128 + i + 1
                if (color == 0)
                    col = 255 - col
                _screen[ind] = col
            }
        }
        set_pos(x * 5, y)
        let ind0 = x * 5 + y * 128
        
        pins.digitalWritePin(_a0_pin, 1);	//	LCMDI=1;
        for(let i=0; i<(ind + 1); i++)
            LCD_WRITE(_screen[ind0+i]);
}

    /**
     * 显示一个整数
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="LCM12864_SPI_NUMBER" block="显示数字 x %x|y %y|数字 %num|颜色 %color"
    //% weight=80 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function showNumber(x: number, y: number, num: number, color: number = 1) {
        showString(x, y, num.toString(), color)
    }

    /**
     * 绘制一条水平线段
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="LCM12864_SPI_HLINE" block="绘制水平线段 x %x|y %y|长度 %len|颜色 %color"
    //% weight=71 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function hline(x: number, y: number, len: number, color: number = 1) {
        for (let i = x; i < (x + len); i++)
            pixel(i, y, color)
    }

    /**
     * 绘制一条垂直线段
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="LCM12864_SPI_VLINE" block="绘制垂直线段 x %x|y %y|长度 %len|颜色 %color"
    //% weight=72 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function vline(x: number, y: number, len: number, color: number = 1) {
        for (let i = y; i < (y + len); i++)
            pixel(x, i, color)
    }

    /**
     * 在指定位置绘制矩形
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     * @param color is line color, eg: 1
     */
    //% blockId="LCM12864_SPI_RECT" block="绘制矩形 x1 %x1|y1 %y1|x2 %x2|y2 %y2|颜色 %color"
    //% weight=73 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function rect(x1: number, y1: number, x2: number, y2: number, color: number = 1) {
        if (x1 > x2)
            x1 = [x2, x2 = x1][0];
        if (y1 > y2)
            y1 = [y2, y2 = y1][0];
        hline(x1, y1, x2 - x1 + 1, color)
        hline(x1, y2, x2 - x1 + 1, color)
        vline(x1, y1, y2 - y1 + 1, color)
        vline(x2, y1, y2 - y1 + 1, color)
    }

    /**
     * 重新绘制屏幕的显示内容
     */
    //% blockId="LCM12864_SPI_DRAW" block="刷新显示"
    //% weight=64 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function draw() {
        
        
        pins.digitalWritePin(_ce_pin, 0)
        pins.spiTransfer(_screen, null)
        pins.digitalWritePin(_ce_pin, 1)
    
        for (let j=0;j<8;j++)
        {
            set_pos(0,j);
            pins.digitalWritePin(_a0_pin, 1);	//	LCMDI=1;
            for(let i=0; i<128; i++)
                LCD_WRITE(_screen[i+128*j]);
        }
    }

    /**
     * 清除 OLED 模块的显示内容
     */
    //% blockId="LCM12864_SPI_CLEAR" block="清除显示内容"
    //% weight=63 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function clear() {
        _screen.fill(0)
        _screen[0] = 0x40
        draw()
    }

    /**
     * 液晶初始化
     * @param nCE：片选信号
     * @param A0：地址选择
     * @param nRST：复位信号
     * @param nSCK：同步时钟
     * @param nSDI：数据输出
     */
    //% blockId="LCM12864_SPI_init" block="初始化液晶屏，设置引脚：|nCE %ce|nRST %rst|A0 %a0|SCK %sck|SDI %sdi|对比度 %cnst"
    //% weight=100 blockGap=8
    //% parts=LCM12864_SPI trackArgs=0
    export function init(ce: DigitalPin = DigitalPin.P2, rst: DigitalPin = DigitalPin.P13, a0: DigitalPin = DigitalPin.P14, sck: DigitalPin = DigitalPin.P15, sdi: DigitalPin = DigitalPin.P16, cnst: number = 0x18) {
        _ce_pin = ce;
        _a0_pin = a0;
        pins.spiPins(sdi, sdi, sck)
        pins.spiFormat(8, 0)
        pins.spiFrequency(3000000)

        pins.digitalWritePin(_ce_pin, 1)
        pins.digitalWritePin(rst, 0)
        basic.pause(20)
        pins.digitalWritePin(rst, 1)
        basic.pause(50)
        pins.digitalWritePin(_a0_pin, 0)

        LCD_WRITE(0xe2)
        LCD_WRITE(0x2f)
        LCD_WRITE(0xaf)
        LCD_WRITE(0x81)
        LCD_WRITE(cnst) // 0x18
        LCD_WRITE(0xa2)
        LCD_WRITE(0xa0)
        LCD_WRITE(0xc8)
        LCD_WRITE(0xa6)

    }
}