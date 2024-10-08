import { create } from "zustand";
import { persist } from "zustand/middleware";

const useQuestionStore = create(
  persist(
    (set) => ({
      question: [],
      userAnswer: [],
      error: null,
      totalTime: 0,
      trueAnswer: 0,
      falseAnswer: 0,
      auth: {},
      page: 1,
      isLoading: false,  // Thêm trạng thái đang tải

      fetchQuestion: async (query) => {
        set({ isLoading: true, error: null });  // Bắt đầu trạng thái đang tải
        try {
          const response = await fetch(`https://opentdb.com/api.php${query}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();

          set((state) => ({
            ...state,
            question: data.results,
            isLoading: false,  // Kết thúc trạng thái đang tải
          }));
        } catch (error) {
          set((state) => ({
            ...state,
            error: error.message,  // Ghi lại thông báo lỗi
            isLoading: false,  // Kết thúc trạng thái đang tải
          }));
        }
      },

      authUser: (auth) => set((state) => ({ ...state, auth })),
      addAnswer: ({ question, answer }) =>
        set((state) => ({
          ...state,
          userAnswer: [...state.userAnswer, { question, answer }],
        })),
      trueAction: () =>
        set((state) => ({ ...state, trueAnswer: state.trueAnswer + 1 })),
      falseAction: () =>
        set((state) => ({ ...state, falseAnswer: state.falseAnswer + 1 })),
      logoutUser: () =>
        set({
          question: [],
          userAnswer: [],
          error: null,
          totalTime: 0,
          trueAnswer: 0,
          falseAnswer: 0,
          auth: {},
          page: 1,
        }),
      resetQuestion: () =>
        set((state) => ({
          ...state,
          question: [],
          trueAnswer: 0,
          falseAnswer: 0,
          error: null,
          page: 1,
        })),
      setTimeStamp: (time) =>
        set((state) => ({
          ...state,
          totalTime: time,
        })),
      nextPage: () =>
        set((state) => ({
          ...state,
          page: state.page + 1,
        })),
    }),
    {
      name: "question-storage", // Tên kho lưu trữ
    }
  )
);

export default useQuestionStore;
