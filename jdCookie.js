/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
        // "pt_key=app_openAAJhg75jADDtxGDiR3FFsIRaro6DPPzsYClV358huEQxLmMCntIZ-XlBBY8iY6ot3Epyg3sMB-o;pt_pin=wdNnyZxalapKVOH;pt_token=ci39o610;remark=qiuju1;",
        // "pt_key=app_openAAJhg75kADDDhs9C6KPKRiUIDaSfW7QICaEEbz7eErQxymeOhR0KASnYbWUEcdWeY77YYZjulm0;pt_pin=jd_KsbLBWLStKZi;pt_token=mib56ax6;remark=qiuju2;",
        'pt_key=app_openAAJhg75jADBjNs4Hoc4sxMGDIsmAxQRQ1_CkOOhspKWQQKVCrhKeE8r2Abv10ul8uElxeuqK1SE;pt_pin=jd_54cf0ebef60bf;pt_token=d5z3bz5d;remark=qiuhua;', //账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
        'pt_key=app_openAAJhg75nADDT6CWF3cr_yOnVQ4bewpfi2vbOn6IAH2OU9UsVJVUpU7ouqXXZIHGvILd59EhyCTM;pt_pin=jd_5a65b02fa6eec;',
        // 'pt_key=app_openAAJhg75hADAjQCw2QXgfgwLgwbt-UpN3KZnl0z4AASmmDy54e1Z_jUOqI3RqDjI7ycY7CKW8YCM;pt_pin=jd_kYbLgxfSQKik;'
    ]
    // 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
        console.log(`您的cookie选择的是用&隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('&');
    } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
        console.log(`您的cookie选择的是用换行隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i].trim();
}