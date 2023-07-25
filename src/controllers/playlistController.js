const getAllPlaylists = async (req, res) => {
    const playlists = [{
        id: 1,
        name: 'Playlist 1',
    },
    {
        id: 2,
        name: 'Playlist 2',
    }
    ]
    res.render('playlists/index', { playlists });
};

const getPlaylist = async (req, res) => {
    const id = req.params.id;

    const songs = [{
        id: 1,
        title: 'One',
        link: 'https://www.youtube.com/watch?v=apK2jCrfnsk&ab_channel=Metallica-Topic'
    },
    {
        id: 2,
        title: 'Chop Suey',
        link: 'https://www.youtube.com/watch?v=CSvFpBOe8eY&ab_channel=systemofadownVEVO'
    }
    ]
    res.render('playlists/show', { songs });
};

const addPlaylist = async (req, res) => {
    res.redirect('/playlists');
};

export { getAllPlaylists, getPlaylist, addPlaylist };