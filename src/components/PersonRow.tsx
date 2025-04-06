import { FC, useMemo } from 'react';
import { Person } from '../types';
import { PersonLink } from './PeopleTable/PersonLink';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  person: Person;
}

export const PersonRow: FC<Props> = ({ person }) => {
  const { sex, born, died, motherName, fatherName } = person;
  const { personSlug } = useParams();

  const isHighlighted = useMemo(
    () => personSlug === person.slug,
    [personSlug, person.slug],
  );

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': isHighlighted })}
    >
      <td>
        <PersonLink person={person} />
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      {person.mother ? (
        <td>
          <PersonLink person={person.mother} />
        </td>
      ) : (
        <td>{motherName || '-'}</td>
      )}
      {person.father ? (
        <td>
          <PersonLink person={person.father} />
        </td>
      ) : (
        <td>{fatherName || '-'}</td>
      )}
    </tr>
  );
};

// PersonRow.displayName = 'PersonRow';
// 'has-background-warning': person.sex === 'm',
/* <td>{fatherName || '-'}</td> */
