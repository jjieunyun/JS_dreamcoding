//경로를 사용하기 위해서 path가 필요하다
const path = require('path')



// 기획 
//1. 사용자가 원하는 폴더의이름을 받아온다
//2. 폴더안에있는 video, caputured, duplicaed폴더를 만든다
//3. 폴더안에잇는 파일을 다 돌면서 해당하는 mp4\mov, png\aae, img_1234 (img_e1234)

//원하는 인자를 받아올때 사용
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder);


if(!folder || !fs.existsSync(workingDir)) {
    console.error('please enter folder name in pictures');
}

console.log(workingDir);