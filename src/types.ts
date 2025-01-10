

interface shortProject {
  url?:             string;
  title:            string;
  imgPath:          string;
  shortDescript:    string;
  longerDescript?:  string;
}

interface Outreach {
  name:             string;
  role:             string; // not sure if I want to keep this prop
  date:             string;
  shortDescript?:   string; // will probably do away w/ for outreach cards
  longerDescript:   string;
}

export type { shortProject, Outreach }
