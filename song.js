const lagu = [
    ["Sticky" /*JUDUL*/,"Kiss Of Life"/*PENYANYI*/, "cover-album-sticky.jpg"/*COVER ALBUM*/, "54M"/*VIEWS*/, "994K"/*LIKES*/,"audio-sticky.mp3"/*AUDIO*/,"kissoflife_s2" /*INSTAGRAM*/,"4TEK9tlkcoxib4GxT3O4ky"/*SPOTIFY*/,"lajeQM00yfE"/*VID YT*/,"rgb(82, 195, 229)"/*RGB BACKGROUND COLOR*/],
    ["DREAM", "BABYMONSTER", "cover-album-dream.jpg", "78M", "1,6M", "audio-dream.mp3", "babymonster_ygofficial", "1SIocsqdEefUTE6XKGUiVS", "ynOtYmpZxak", "rgb(185, 30, 36)"],
    ["IWALY", "IZNA", "cover-album-IWALY.jpg", "993K", "11K", "audio-IWALY.mp3", "izna_offcl", "6EB5QC7lGAu7bSuWQ416d4", "o-HAuKf5pzY","rgb(168, 164, 114)"],
    ["4life", "VVUP", "cover-album-4life.jpg", "491K", "24K", "audio-4life.mp3", "vvup.official", "2zy0MxCWDb4XOziNuyEHtb", "A-Hr8aYSEx0", "rgb(179, 186, 194)"],
    ["Pookie", "Fifty-fifty", "cover-album-pookie.jpg", "12M", "157K", "audio-pookie.mp3", "we_fiftyfifty", "4GJ6xDCF5jaUqD6avOuQT6", "1ZX1vEDTfY4", "rgb(145, 78, 143)"],
    ["The Chase", "Hearts2Hearts", "cover-album-the-chase.jpg", "19M", "634K", "audio-the-chase.mp3", "hearts2hearts", "1ZLU77nRzQlaP23mVSYpCQ", "kxUA2wwYiME", "rgb(140, 182, 206)"],
    ["Adult Swim", "KAI", "cover-album-adult-swim.jpg", "4,6M", "245K", "audio-adult-swim.mp3", "zkdlin", "6iVo62B0bdTknRcrktCmak", "QqkLnNClpAQ", "rgb(44, 128, 172)"],
    ["NERDY", "ifeye", "cover-album-nerdy.jpg", "10M", "57K", "audio-nerdy.mp3", "ifeye_official", "1g971p3BXozVYNCn7JRMNa", "I_msu2-4UAU", "rgb(46, 68, 131)"],
    ["LIKE U 100", "Gyubin", "cover-album-like-u-100.jpg", "558K", "21K", "audio-like-u-100.mp3", "baggyubin73", "7nScMbyBG94XsSpe7yrlmS", "07g_tnrD-sY", "rgb(247, 136, 136)"],
    ["Shoot", "no na", "cover-album-shoot.jpg", "3,7M", "152K", "audio-shoot.mp3", "nonawav", "25ZVvmN0Tm9Os5K42swK8b", "6HWHRP2rZqE", "rgb(25, 76, 95)"],
    ["Missing You", "Groove Team (Universe League) [Original: BTOB] ", "cover-album-groove-missing-you.jpg","317K", "5,6K", "audio-groove-missing-you.mp3", "sbs_universeleague_official", "3z7vj1qYRJgghabIFnv2Yu", "1Ykt1ErvTs8", "rgb( 212, 191, 170)"],
    ["Drama", "Drama Team (I-LAND 2) [Original: AESPA]", "cover-album-drama-team.jpg", "3,1M", "58K","audio-drama-team.mp3", "mnetiland", "5wA7TzIKrDqmlnEFk6t1y4", "V_f8VB5UmEg", "rgb( 184, 39, 54)"],
];

var konten = document.getElementById("container");
konten.innerHTML = ""
for (let i = 0; i < lagu.length; i++){
    let judul = lagu[i][0];
    let penyanyi = lagu[i][1];
    let coverAlbum = lagu[i][2];
    let views = lagu[i][3];
    let likes = lagu[i][4];
    let audio = lagu[i][5];
    let insta = lagu[i][6];
    let spoty = lagu[i][7];
    let yt = lagu[i][8];
    let bg = lagu[i][9];
 
    

    var element =` <div class="yey"  style="background-color:${bg}">
            <div><h1>${judul}</h1></div>
            <div><h2>${penyanyi}</h2></div>
            <div><img src="${coverAlbum}" alt=""></div>
            <div id="bawah">
                <div id="ket">
                    <div><img src="logo_keterangan_view.png" alt="">${views}</div>
                    <div><img src="logo_keterangan_likes.png" alt="">${likes}</div>
                </div>
                <div class="play-button">
                    <img class="status-icon" src="logo_play.png" alt="Play">
                    <audio class="audio-player" src="${audio}"></audio>
                </div>
                <div class="logo-sosmed">
                    <div><a href="https://www.instagram.com/${insta}" target="_blank"><img class="pict" src="logo_sosmed_instagram.png" alt=""></a></div>
                    <div><a href="https://open.spotify.com/artist/${spoty}" target="_blank"><img class="pict" src="logo_sosmed_spotfy.png" alt=""></a></div>
                    <div><a href="https://www.youtube.com/watch?v=${yt}" target="_blank"><img class="pict" src="logo_sosmed_youtube.png" alt=""></a></div>
                </div>
            </div>
        </div>
   `;

    konten.insertAdjacentHTML("beforeend", element);
};

const allPlayButtons = document.querySelectorAll(".play-button");
allPlayButtons.forEach(button =>{
    button.addEventListener('click', function(){
        const audioPlayer = this.querySelector('.audio-player');
        const statusIcon = this.querySelector('.status-icon');

        document.querySelectorAll('.audio-player').forEach(player => {
            if (player !== audioPlayer && !player.paused){
                player.pause()
            }
        });
        if (audioPlayer.paused){
            audioPlayer.play();
            statusIcon.src = 'logo_pause.png';
            statusIcon.alt = 'Pause';
        } else {
            audioPlayer.pause();
            statusIcon.src = 'logo_play.png';
            statusIcon.alt = 'Play';
        }
    });
    const audioPlayerUntukEnded = button.querySelector('.audio-player');
    const statusIconUntukEnded = button.querySelector(".status-icon");

    audioPlayerUntukEnded.addEventListener('ended', function(){
        statusIconUntukEnded.src = 'logo_play.png';
        statusIconUntukEnded.alt = "Play";
    });
});
