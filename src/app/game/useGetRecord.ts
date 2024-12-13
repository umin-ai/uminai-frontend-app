import { useEffect, useState } from "react";
import { atomWithStorage } from 'jotai/utils';
import { atom, useAtom } from 'jotai';
import * as UUID from 'uuid';
interface GeneralState {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
}
const initialState: GeneralState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
}
export const stanleyRecordAtom = atomWithStorage<{ username: string; count: number } | null>('stanleyRecord', null);

export const useGetRecord = ({
  username,
  setCount,
}: {
  username: string;
  setCount: (count: number) => void;
}) => {
  const [userData, setUserData] = useAtom(stanleyRecordAtom);
  const [getRecordState, setGetRecordState] = useState<GeneralState>(initialState);
  const [newUUID, setNewUUID] = useState<string>('');
  const [isExist, setIsExist] = useState<boolean>(false);
  const [isExistUserCounter, setIsExistUserCounter] = useState<number>(0);
  const fetchUserByUsername = async () => {
    try {
      setIsExist(false);
      // setUserData({ username: 'NOT_FOUND', count: 0 });
      setGetRecordState((s) => ({ ...s, isLoading: true }));
      if (username === 'NOT_FOUND') throw new Error('Username is required');
      const response = await fetch(`https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/?username=${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json();
      console.log('result', result);
      if (result.username === 'NOT_FOUND') {
        console.log('User not found');
        setUserData(null);
        const UUIDStr = UUID.v4();
        console.log('UUIDStr', UUIDStr);
        setNewUUID(UUIDStr);
      } else {
        // setUserData(result);
        setIsExist(true);
        setIsExistUserCounter(result.count);
        setCount(result.count);
      }
    } catch (error: any) {
      throw new Error('Error fetching user by username', error);
    }
  }

  useEffect(() => {
    if (username.length > 0) {
      fetchUserByUsername();
    }
  }, [username]);

  return {
    newUUID,
    userIsExist: isExist,
    userIsExistCounter: isExistUserCounter,
    userData,
    getRecordState,
    fetchUserByUsername,
  }
}

export const useGetInitialRecordFromStorage = () => {
  const [userData, setUserData] = useAtom(stanleyRecordAtom);

  const onInit = async () => {
    try {
      if (userData && userData.username === 'NOT_FOUND') return;
      const response = await fetch(`https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/?username=${''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      
    }
  }
}

export const useSaveOrCreateUsername = ({
  username,
  uuidProof,
  close,
  setCount,
}: {
  username: string;
  uuidProof: string;
  close: () => void;
  setCount: (count: number) => void;
}) => {
  const [userData, setUserData] = useAtom(stanleyRecordAtom);
  const [saveState, setSaveState] = useState<GeneralState>(initialState);
  const saveAndCreateUsername = async () => {
    try {
      if (username === '') throw new Error('Username is required');

      setSaveState((s) => ({ ...s, isLoading: true }));
      await fetch('https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          uuidProof,
        }),
      })
      setUserData({ username, count: 0 });
      setCount(0);
      close();
      setSaveState((s) => ({ ...s, isLoading: false, isSuccess: true }));
    } catch (error) {
      setSaveState((s) => ({ ...s, isError: true }));
      console.error(error);
    } finally {
      setSaveState((s) => ({ ...s, isLoading: false }));
    }
  }

  return {
    saveState,
    saveAndCreateUsername,
  }
}
const saveAndCreateUsername = async ({
  username,
  uuidProof,
}: {
  username: string;
  uuidProof: string;
}) => {
  try {
    const onSave = await fetch('https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        uuidProof,
      }),
    })
  } catch (error) {
    throw new Error('Error saving or creating username');
  }
}

export const useUpdateCount = ({
  username,
}: {
  username: string | undefined,
}) => {
  const [userData, setUserData] = useAtom(stanleyRecordAtom);
  const updateCount = async (count: number) => {
    try {
      if (!userData || !username) return;
      const response = await fetch('http://localhost:3001/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          count,
        }),
      })
      setUserData({
        username,
        count,
      })
    } catch (error) {
      console.error('Error updating count', error);
    }
  }

  return {
    updateCount,
  }
}

export const useLogOut = () => {
  const [userData, setUserData] = useAtom(stanleyRecordAtom);
  const logOut = () => {
    setUserData(null);
  }

  return {
    logOut,
  }
}

interface LeaderboardState {
  username: string;
  count: number;
  lastUpdated: string;
}
export const useGetLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardState[]>([]);

  const onGetLeaderboard = async () => {
    console.log('onGetLeaderboard');
    try {
      setLeaderboard([]);
      const response = await fetch('https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/leaderboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json() as LeaderboardState[];
      setLeaderboard([...result]);
    } catch (error) {
      console.error('Error fetching leaderboard', error);
    }
  }

  return {
    leaderboard,
    onGetLeaderboard
  }
}

const useSubmitBoost = ({
  proofId,
  walletId,
}: {
  proofId: string;
  walletId: string;
}) => {
  
  const submitBoost = async () => {
    try {
      const response = await fetch('https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/boost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proofId,
          walletId,
        }),
      });
    } catch (error) {
      
    }
  }
}

const useIsBoosted = () => {
  const [isBoosted, setIsBoosted] = useState<boolean>(false);

  const onCheckBoosted = async () => {
    try {
      const response = await fetch('https://crucial-ernaline-3700rpm-6319f6ee.koyeb.app/boosted', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setIsBoosted(result.isBoosted);
    } catch (error) {
      console.error('Error checking if boosted', error);
    }
  }

  return {
    isBoosted,
    onCheckBoosted,
  }
}