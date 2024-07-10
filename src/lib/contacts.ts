interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  link?: {
    display?: string;
    url?: string;
  };
}

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: "GitHub",
      link: {
        display: "@prathmeshsadake",
        url: "https://github.com/PrathmeshSadake",
      },
    },
    {
      title: "LinkedIn",
      link: {
        display: "linkedin.com/in/prathmeshsadake",
        url: "https://linkedin.com/in/prathmeshsadake",
      },
    },
    {
      title: "Twitter / X.com",
      link: {
        display: "x.com/prathmeshsadake",
        url: "https://x.com/prathmeshsadake",
      },
    },
  ];
};
