const storageKey = 'sveltenote/notes';

export const loadNotes = () => {
  const rowNotes = localStorage.getItem(storageKey);
  return rowNotes ? JSON.parse(rowNotes) : [];
};

export const saveNotes = (notes) => {
  localStorage.setItem(storageKey, JSON.stringify(notes));
};

export const addNote = (note) => {
  const currentNotes = loadNotes();
  const newNotes = [...currentNotes, note];
  saveNotes(newNotes);
};

export const overwriteNote = (index, note) => {
  const currentNotes = loadNotes();
  const newNotes = [...currentNotes];
  newNotes[index] = note;
  saveNotes(newNotes);
};
