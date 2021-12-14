export interface Data {
    data:  Datum[];
    total: number;
    next:  string;
}

export interface Datum {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    DatumType;
}

export interface Album {
    id:           number;
    title:        string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    tracklist:    string;
    type:         AlbumType;
}

export enum AlbumType {
    Album = "album",
}

export interface Artist {
    id:             number;
    name:           Name;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}

export enum Name {
    Eminem = "Eminem",
}

export enum ArtistType {
    Artist = "artist",
}

export enum DatumType {
    Track = "track",
}

export interface DataAlbum {
    data:  DatumAl[];
    total: number;
    next:  string;
}

export interface DatumAl {
    id:              number;
    title:           string;
    link:            string;
    cover:           string;
    cover_small:     string;
    cover_medium:    string;
    cover_big:       string;
    cover_xl:        string;
    md5_image:       string;
    genre_id:        number;
    nb_tracks:       number;
    record_type:     RecordTypeEnum;
    tracklist:       string;
    explicit_lyrics: boolean;
    artist:          ArtistAl;
    type:            RecordTypeEnum;
}

export interface ArtistAl {
    id:             number;
    name:           string;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistTypeAl;
}

export enum ArtistTypeAl {
    Artist = "artist",
}

export enum RecordTypeEnum {
    Album = "album",
    Compile = "compile",
    Single = "single",
}


export interface Track {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    isrc:                    string;
    link:                    string;
    share:                   string;
    duration:                number;
    track_position:          number;
    disk_number:             number;
    rank:                    number;
    release_date:            Date;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    bpm:                     number;
    gain:                    number;
    available_countries:     string[];
    contributors:            Artist[];
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    string;
}

export interface AlbumT {
    id:           number;
    title:        string;
    link:         string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    release_date: Date;
    tracklist:    string;
    type:         string;
}

export interface ArtistT {
    id:             number;
    name:           string;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           string;
    role?:          string;
}

export interface TracksAlbum {
    id:                      number;
    title:                   string;
    upc:                     string;
    link:                    string;
    share:                   string;
    cover:                   string;
    cover_small:             string;
    cover_medium:            string;
    cover_big:               string;
    cover_xl:                string;
    md5_image:               Md5Image;
    genre_id:                number;
    genres:                  Genres;
    label:                   string;
    nb_tracks:               number;
    duration:                number;
    fans:                    number;
    release_date:            Date;
    record_type:             string;
    available:               boolean;
    tracklist:               string;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    contributors:            Contributor[];
    artist:                  Artist;
    type:                    string;
    tracks:                  Tracks;
}

export interface ArtistA {
    id:             number;
    name:           Name;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}

export enum NameA {
    DaftPunk = "Daft Punk",
    Dance = "Dance",
}

export enum ArtistTypeA {
    Artist = "artist",
    Genre = "genre",
}

export interface Contributor {
    id:             number;
    name:           Name;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           ArtistType;
    role:           string;
}

export interface Genres {
    data: ArtistElement[];
}

export interface ArtistElement {
    id:         number;
    name:       Name;
    picture?:   string;
    type:       ArtistType;
    tracklist?: string;
}

export enum Md5Image {
    The2E018122Cb56986277102D2041A592C8 = "2e018122cb56986277102d2041a592c8",
}

export interface Tracks {
    data: TracksDatum[];
}

export interface TracksDatum {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               Md5Image;
    artist:                  ArtistElement;
   
}