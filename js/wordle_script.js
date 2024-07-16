def dict_to_array():
arr = []
with open('words.txt', 'r') as words:
line = words.readline().replace('\n', '')
arr.append(line)
while line:
line = words.readline().replace('\n', '')
arr.append(line)

words.close()
return arr


function rel_freq() {
    let frequency_ = [];
    let count = 0;

    for(let alpha = 97; alpha < 123; alpha++) {
        frequency_.push([char(alpha), 0.0]);
        frequency_.append([chr(alpha), 0.0]);
    }


    for word_ in dictionary:
        for letter_ in word_:
            frequency_[ord(letter_) - 97][1] += 1
    count += 1

    for idx in frequency_:
        idx[1] = idx[1] * 100 / count

    frequency_ = sorted(frequency_, key=lambda freq: freq[1], reverse=True)

    return frequency_
}


def find(arr, value, index=0):
idx = 0
for i in range(len(arr)):
if arr[i][index] == value:
return idx
idx += 1
return -1


def check_duplicates(word_, letter_):
return word_.count(letter_) > 1


def find_most_probable():
points = 0
max_points = -1
best_word_ = ''

for word_ in static_dict:
for letter_ in word_:
points += frequencies[find(frequencies, letter_)][1]
if points >= max_points:
best_word_ = word_
max_points = points
points = 0

return best_word_


# take out all of the letters from the relative frequency array (so we ignore incorrect letters)
# update the new.txt dictionary to be without the inputted letter
# strength refers to the strength of the filter:
    # strength=0 corresponds to when we DONT have that letter in the true word
# strength=1 corresponds to removing all words that have a letter in THAT spot
# strength=2 corresponds to removing all words that DONT have a letter in that spot
def update_dictionary(letter_, idx_=0, strength_=0):
global static_dict

if strength_ == 1:  # strength == 1
# removes every word in which a 'letter_' is in that position 'idx_'
static_dict = list(filter(lambda key: not letter_ == key[idx_] and letter_ in key, static_dict))
elif strength_ == 2:  # strength == 2
# only keeps the words in which 'letter_' is in that position 'idx_'
static_dict = list(filter(lambda key: letter_ == key[idx_], static_dict))
elif strength_ == 3:  # strength == 3
# removes every word where the letter is in the position other than 'idx_'
static_dict = list(filter(lambda key: letter_ == key[idx_], static_dict))
for index in range(WORD_LENGTH):
if index == idx_:
continue
static_dict = list(filter(lambda key: not letter_ == key[index], static_dict))
else:  # strength == 0
# removes all words with the appearance of that letter 'letter_'
letter_index = find(arr=frequencies, value=letter_)
frequencies.pop(letter_index)
static_dict = list(filter(lambda key: letter_ not in key, static_dict))


def is_solution(colors_):
for color_ in colors_:
if color_ != 'g':
return False
return True


def contains_final(word_, letter_, colors_):
for index in range(WORD_LENGTH):
if word_[index] == letter_ and (colors_[index] == 'g' or colors_[index] == 'y'):
return True
return False


def get_pixel_loc(row_, col_):
return row_ * 68 + 215, col_ * 67.5 + 565


def get_color(row_, col_):
pixel_loc = get_pixel_loc(row_, col_)
pix = pyautogui.screenshot()
pixel_ = pix.getpixel((pixel_loc[1] * 2 + 1, pixel_loc[0] * 2 + 1))
red = pixel_[0]
green = pixel_[1]
if green in range(50, 70) and red in range(50, 70):
return 'b'
elif green in range(150, 170) and red in range(170, 190):
return 'y'
elif green in range(130, 150) and red in range(90, 110):
return 'g'
else:
print(pixel_)
print(pixel_loc)
print(static_dict)
exit(20)


# checks if for a letter that has a green, if the rest are black. If the rest are black, then
# we say should push after that only the words that have the letter in that spot and none other
def duplicates_are_black(word_, colors_, idx_):
if not check_duplicates(word_, word_[idx_]):
return False

for index_ in range(WORD_LENGTH):
if idx_ != index_ and word_[index_] == word_[idx_] and (colors_[index_] == 'y' or colors_[index_] == 'g'):
return False
return True


# taking in a word 'word_guess', we guess the word against our real word 'word'
# we keep number_tries up to date, we update the static_dict as we go along
# return true if the word thrown was indeed the correct word; else, return false
def guess_word(word_guess_, colors_):
global number_tries

if is_solution(colors_):
return True

number_tries += 1

# this prevents words like apart and arose from conflicting with each other
# goes through and checks the strength=2 or strength=0 of each index of the words (checks the 'greens' / 'greys')
for index in range(WORD_LENGTH):
# only have words that have the 'green' letter at that particular spot
if colors_[index] == 'g':
if duplicates_are_black(word_guess_, colors_, index):
update_dictionary(word_guess_[index], idx_=index, strength_=3)
else:
update_dictionary(word_guess_[index], idx_=index, strength_=2)
elif colors_[index] == 'y':
update_dictionary(word_guess_[index], idx_=index, strength_=1)
# remove all words with that 'grey' letter at that particular spot iff theres not another duplicate of 'y' / 'g'
elif colors_[index] == 'b' \
                and not contains_final(word_guess_, word_guess_[index], colors_):
update_dictionary(word_guess_[index], strength_=0)

return False


# now write it so that you take in the input, get the word, create another array or map that shows the letters
# that were right or not, and if those that were right are in the correct positions
# from then, we use the static_dict to take out all the words that do not comply with the letters not in
# the word or words that dont have the letter at that exact space or words that dont have the necessary letter
# from then on, we can possibly use the relative frequencies of each letter to effectively narrow it down
# if we are on guess 4/5 then we use the letters with the highest frequencies, as we arent capable of finding the
# most common words (yet)


if __name__ == '__main__':
# get all lines of array, put into an array that we can use
print('Started the program! Switch your focus to the full-screen Wordle page.')
dictionary = dict_to_array()
dictionary.pop(-1)
static_dict = dictionary[:]

START_WORD = 'crane'
WORD_LENGTH = 5
ATTEMPTS_POSSIBLE = 6

frequency = rel_freq()
frequencies = frequency[:]

number_tries = 0

word_guess = START_WORD

colors = ''

auto_break = False
while True:
values = pyautogui.locateOnScreen('wordle_title.png', confidence=0.85)
if values is not None:
    auto_break = True
for row in range(ATTEMPTS_POSSIBLE):
pyautogui.write(word_guess, interval=0.30)
pyautogui.press('enter')
time.sleep(2)
for col in range(WORD_LENGTH):
colors += get_color(row, col)
guessed = guess_word(word_guess, colors)
if not guessed:
    word_guess = find_most_probable()
else:
exit(30)
colors = ''
elif auto_break:
    break
