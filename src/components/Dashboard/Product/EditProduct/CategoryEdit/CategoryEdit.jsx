import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../../../api/api'; // Import Axios
import { fetchCategory } from '../../../slice/categorySlice'; // Assuming this is correctly implemented

const CategoryEdit = ({ formData, onCategoryChange,error }) => {
    const token = useSelector((state) => state.auth.token);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            setLoading(true);
            dispatch(fetchCategory(token))
                .unwrap()
                .then((data) => {
                    setCategories(data);
                    if (formData?.category_title) {
                        setSelectedCategory(formData.category_title); // Set the category from formData as selected
                    }
                })
                .catch((error) => {
                    console.error(error.response?.status, "error");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [dispatch, token]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        setSelectedCategory(value);
        onCategoryChange(value); // Pass the selected category as a string
    };

    const handleAddNewCategory = () => {
        setShowNewCategoryInput(true);
    };

    const handleSaveNewCategory = async () => {
        if (newCategory.trim()) {
            const newCategoryObj = { title: newCategory };

            try {
                setLoading(true);
                const { data } = await axios.post('/add_category', newCategoryObj, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Update the category list and set the new category as selected
                dispatch(fetchCategory(token))
                    .unwrap()
                    .then((updatedData) => {
                        setCategories(updatedData);
                        setSelectedCategory(data.title); // Set the new category as selected
                        onCategoryChange(data.title); // Notify parent component with the new category
                    })
                    .catch((error) => {
                        console.error("Failed to fetch categories:", error);
                    });

                setNewCategory('');
                setShowNewCategoryInput(false);
            } catch (error) {
                console.error("Failed to save category:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDiscardNewCategory = () => {
        setNewCategory('');
        setShowNewCategoryInput(false);
    };

    return (
        <div className='mt-10'>
            <div className='flex justify-between gap-10'>
            <p className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
                    <span className="text-[#EE4444] mr-1"> *</span>
                    Category</p>
                {/* <p className='text-[12px] leading-[16px] text-[#FF0000BF] font-normal'>Select one category!</p> */}
            </div>
            {error?.errCategory && <span className="text-red-500 text-xs">{error.errCategory}</span>}
            <div className="bg-white rounded-md border p-6 mt-2 h-[220px] overflow-y-auto">
                {categories.map((cat) => (
                    <div key={cat.id} className="flex items-center mb-3">
                        <input
                            type="checkbox"
                            id={`category-${cat.id}`}
                            value={cat.title}
                            checked={selectedCategory === cat.title}
                            onChange={handleCheckboxChange}
                            className="mr-5 cursor-pointer"
                            style={{ accentColor: selectedCategory === cat.title ? '#0052cc' : 'initial' }}
                        />
                        <label htmlFor={`category-${cat.id}`} className="text-[12px] leading-[16px] text-[#58595A]">
                            {cat.title}
                        </label>
                    </div>
                ))}

                {showNewCategoryInput && (
                    <div className="mb-3">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                                placeholder="Enter new category name"
                            />
                        </div>
                        <div className="flex mt-2">
                            <button onClick={handleSaveNewCategory} className="text-[#0052cc] text-[12px] leading-[16px] font-semibold mr-2">
                                Save
                            </button>
                            <button onClick={handleDiscardNewCategory} className="text-[#FF0000BF] text-[12px] leading-[16px] font-semibold">
                                Discard
                            </button>
                        </div>
                    </div>
                )}

                <div className='flex justify-end'>
                    <button onClick={handleAddNewCategory} className="text-[#0052cc] text-[12px] leading-[16px] font-semibold mt-2 flex items-center">
                        <span className="material-symbols-outlined mr-2">add</span>
                        Add New Category
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryEdit;
